import { AxiosResponse } from 'axios'
import { GetCoursesResponse } from './types'
import { $apiCur } from '../../api'
import { ApiRoutes } from '../../routes/ApiRoutes'

export default class CoursesService {
    static getCourses(): Promise<AxiosResponse<GetCoursesResponse>> {
        return $apiCur.get(ApiRoutes.getCourses)
    }
}
