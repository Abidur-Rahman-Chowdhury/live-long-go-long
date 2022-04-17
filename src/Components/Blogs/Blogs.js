import React from 'react';
import './Blogs.css';
const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10  gap-y-3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="w-80 border-2 mx-auto rounded-lg p-4">
        <h1 className="text-center text-xl font-bold pb-3">
          Difference between Authorization VS Authentication
        </h1>
        <hr />
        <p className="mt-4">
          <span className="font-bold">
            Answer: <br /> Authorization:
          </span>
          কেউকে কোনো কাজ করার জন্য বা কোনো resource ব্যবহার করতে পারার
          permission দেওয়ার প্রক্রিয়া। অর্থাৎ কেউকে কোন কাজ বা কোন করার রিসোর্স
          ব্যবহার করার অনুমতি প্রদান করা। <br />
          <span className="font-bold">Authentication:</span> কিছু সত্য, আসল বা
          বৈধ বলে প্রমাণিত করার বা দেখানোর প্রক্রিয়া বা ক্রিয়া। কোনও
          ব্যবহারকারীর পরিচয় যাচাই করার প্রক্রিয়া বা ক্রিয়া process.
        </p>
      </div>
      <div className="w-80 border-2 mx-auto  rounded-lg p-4">
        <h1 className="text-center  text-xl font-bold pb-3">
          Why are you using firebase ? What other options do you have to
          implement authentication?
        </h1>
        <hr />
        <p className="mt-4">
          <span className="font-bold">Answer: </span>
          আমি যদি ডাইনামিক এপ বানাতে যায় তার জন্য আমার বেকএন্ড এর প্রয়োজন সেই
          জায়গায় ফায়ারবেইস হলো ডায়নামিক এপ এর জন্য সম্পূর্ণ ব্যাকএন্ড কোড লেখার
          একটি সময় সাশ্রয়ী বিকল্প। যার মাধ্যমে আমি অথেন্টিকেনশন, ডাটাবেইস এবং
          হোস্টিং এর মতো সুবিধাও পেয়ে থাকি। এজন্য আমি ফায়ারবেইজ ব্যবহার করি।{' '}
          <br />
          <span className="font-bold">
            Other option to implement authentication:{' '}
          </span>
          <li>OneLogin</li>
          <li>JumpCloud</li>
          <li>Microsoft Azure Active Directory</li>
          <li>Auth0</li>
          <li>ForgeRock</li>
        </p>
      </div>
      <div className="w-80 border-2 mx-auto  rounded-lg p-4">
        <h1 className="text-center  text-xl font-bold pb-3">
          What other services does firebase provide other than authentication?
        </h1>
        <hr />
        <p className="mt-4">
          <span className="font-bold">Answer: </span> <br />
          <li>Cloud Firestore.</li>
          <li>Cloud Functions.</li>
          <li>Hosting.</li>
          <li>Cloud Storage.</li>
          <li>Google Analytics.</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
