import { FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { ListTask } from './components/ListTask';

import styles from './App.module.css';

import './global.css';

export interface ITasks {
  content: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTaskAdd = { content: newTask, done: false };

    setTasks([...tasks, newTaskAdd]);
    setNewTask('');
  }

  function deleteTask(contentTextToDelete: string) {
    const newTasksWithoutContentTextToDelete = tasks.filter(
      (task) => task.content !== contentTextToDelete
    );
    setTasks(newTasksWithoutContentTextToDelete);
  }

  function newTaskText(contentTextToNewTask: string) {
    setNewTask(contentTextToNewTask);
  }

  function checkTask(taskText: string) {
    const newTasks = [...tasks];

    const foundTaskToChange = newTasks.find(
      (task) => task.content === taskText
    );

    if (foundTaskToChange) {
      foundTaskToChange.done = !foundTaskToChange.done;
    }

    setTasks([...newTasks]);
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
        <ListTask
          tasks={tasks}
          onDeleteTask={deleteTask}
          onCheckTask={checkTask}
        />
      </main>
    </div>
  );
}
