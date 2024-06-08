import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/components/auth_context';
import Sidebar from '@/components/Sidebar';
import classes from './mypage.module.css';
import { ScrollToTopButton } from "@/components/button";
export default function MyPage(props) {
  const [user_data, set_user_data] = useState([]);
  const [selectedIndex, set_selectedIndex] = useState(null);
  const [comment, set_comment] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const mainContentRef = useRef(null);
  const { login_username, logout, checkLoginStatus } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!login_username) return;

    const promises = [];
    for (let page_num = 1; page_num <= 8; page_num++) {
      promises.push(
        fetch(`/api/get-user-selections/${page_num}?username=${login_username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        }).then((res) => res.json())
      );
    }
    Promise.all(promises)
      .then((results) => {
        const newData = results.flat();
        set_user_data(newData);
      })
      .catch((error) => {
        console.error('GET METHOD FAILED', error);
      });

  }, [login_username]);


  function handleScrollToTop() {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  const handleElementClick = (index) => {
    set_selectedIndex(selectedIndex === index ? null : index);
  };

  const handleDelete = (index) => {
    set_user_data(user_data.filter((data) => data.index !== index));
  };

  const handleCommentChange = (e) => {
    set_comment(e.target.value);
  };

  const handleCommentSubmit = (index) => {
    console.log(`Comment for index ${index}: ${comment}`);
    set_comment('');  
  };

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };



  if (!login_username) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={classes.container}>
      <Sidebar onToggle={handleSidebarToggle} />
      <main ref={mainContentRef} className={`${classes.mainContent} ${isSidebarOpen ? classes.mainContentOpen : classes.mainContentClosed}`}>
      <ScrollToTopButton handleScrollToTop={handleScrollToTop} />
        <h1 className={classes.pageTitle}>{login_username}님의 마이페이지</h1>
        {user_data.map((data) => (
          <div key={data.index}>
            <h2 onClick={() => handleElementClick(data.index)} className={classes.itemTitle}>{data.text}</h2>
            {selectedIndex === data.index && (
              <div>
                <textarea
                  value={comment}
                  onChange={handleCommentChange}
                  placeholder="댓글을 입력하세요"
                  className={classes.commentBox}
                />
                <button onClick={() => handleCommentSubmit(data.index)} className={classes.button}>댓글 달기</button>
                <button onClick={() => handleDelete(data.index)} className={classes.button}>삭제</button>
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
