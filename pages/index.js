import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div class='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <p class='mt-2 text-slate-500'>
        Looking to take your team away on a retreat to enjoy awesome food and
        take in some sunshine? We have a list of places to do just that.
      </p>
    </div>
  );
}
