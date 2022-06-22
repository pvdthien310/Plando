import { useState, useEffect } from 'react';
import { getData } from './../redux/slices/accountSlice';
import { useAppSelector } from './useSelector';
import { useAppDispatch } from './useDispatch';
import { unwrapResult } from '@reduxjs/toolkit';


export const useData = () => {
    const dispatch = useAppDispatch()
    const [data, setData] = useState<any>({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("No Error")
    const userId = useAppSelector(state => state.account.user._id)

    const fetchData = async () => {
        setLoading(true)
        try {
            const resultAction = await dispatch(getData(userId!))
            const originalPromiseResult = unwrapResult(resultAction)
            if (originalPromiseResult) {
                setData(originalPromiseResult)
                setLoading(false)
            }
        } catch (rejectedValueOrSerializedError) {
            if (rejectedValueOrSerializedError != null) {
                setError("Error load data")
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])

    return { data, loading, error, fetchData }
}