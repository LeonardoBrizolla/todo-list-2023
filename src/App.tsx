import { FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { ListTask } from './components/ListTask';

import styles from './App.module.css';

import './global.css';

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  function deleteTask(contentTextToDelete: string) {
    const newTasksWithoutContentTextToDelete = tasks.filter(
      (task) => task !== contentTextToDelete
    );
    setTasks(newTasksWithoutContentTextToDelete);
  }

  function newTaskText(contentTextToNewTask: string) {
    setNewTask(contentTextToNewTask);
  }

  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTask
          onNewTaskText={newTaskText}
          newTask={newTask}
          onAddTask={handleAddTask}
        />
        <ListTask tasks={tasks} onDeleteTask={deleteTask} />
      </main>
    </div>
  );
}
