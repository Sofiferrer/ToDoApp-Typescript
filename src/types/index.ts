export type TaskType = {
  id: string
  title: string
  date: string
  assigned: string
  info: string
  status: string
};

export type A = Omit<TaskType, 'date' | 'info'>

export type B = Pick<TaskType, 'id' | 'title'>

export type C = Partial<TaskType>

export type E = 'verde' | 'amarillo' | 'rojo' | 'azul'

export type D = Omit<TaskType, 'status'> & { color: E }


const card: D = {
  id: '123',
  title: 'Título',
  date: '12-12-2021',
  assigned: 'Adrián',
  info: 'Lorem Ipsum',
  color: 'verde'
}