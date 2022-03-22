import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getThreads } from '../../store/threads';
import { getCategories } from '../../store/categories';
import ThreadCard from '../ThreadCard/threadcard';
import './home.css';
import Create from '../Create/create';
import Filter from '../Filter/filter';

const Home = () => {
    const dispatch = useDispatch();
    // window.scrollTo(0,0);

    useEffect(() => {
        dispatch(getThreads());
        dispatch(getCategories());
    }, [dispatch]);

    const allThreads = useSelector(state => {return state.threads})
    const allThreadsArr = Object.values(allThreads)

    console.log(allThreads, 'sorting this')

 
    // const projectsBasketball = Object.values(allThreads).filter(thread => thread.categoryId === 1)
    // const projectsFootball = Object.values(allThreads).filter(thread => thread.categoryId === 2)

    return (
        <>
        <div className="home-container">
            <div className="thread-container">
            <Create></Create>
            <Filter></Filter>
                {allThreadsArr.slice(0).reverse().map(thread => {
                    return (
                        <ThreadCard key ={thread.id} thread={thread}></ThreadCard>
                    )
                })}
            </div>
        </div>
        </>
    )

}

export default Home;