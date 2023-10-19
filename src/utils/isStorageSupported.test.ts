import { renderHook } from '@testing-library/react'
import isStorageSupported from './isStorageSupported'

describe('isStorageSupported', () => {
    test('should return true for supported storage', () => {
        const { result } = renderHook(() => isStorageSupported())
        expect(result.current).toBe(true)
    })
})
