import {FC} from 'react'
import { useParams } from 'react-router-dom'

const Foods: FC = () => {
  const { restaurantsId } = useParams<{restaurantsId: string}>();
  return (
    <div>
      フード一覧
      <p>restaurantsId は {restaurantsId}です
      </p>
    </div>
  )
}

export default Foods
