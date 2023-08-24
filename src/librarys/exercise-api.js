import CourseImagePlaceholder from "../assets/images/course-placeholder.jpg";

const courseList = [
    {
        id: 1,
        title: "거북목 탈출코스",
        description: "이 코스는 목과 어깨의 근육을 이완시켜주는 운동을 포함하고 있습니다.",
        time: "총 10분",
        image: CourseImagePlaceholder,
        tags: ["목", "어깨", "앉은 자세"]
    },
    {
        id: 2,
        title: "코어 강화 코스",
        description: "코어 근육을 강화하는데 초점을 둔 운동을 학습합니다.",
        time: "총 15분",
        image: CourseImagePlaceholder,
        tags: ["팔", "선 자세"]
    },
    { 
      id: 3,
      title: "하체 강화 코스",
      description: "다리와 엉덩이 근육을 강화하는 운동을 진행합니다.",
      time: "총 25분",
      image: CourseImagePlaceholder,
      tags: ["허벅지", "선 자세"]
    },
  
    { 
      id: 4,
      title: "유연성 향상 코스",
      description: "몸의 유연성을 높이는 스트레칭 운동을 포함하고 있습니다.",
      time: "총 15분",
      image: CourseImagePlaceholder,
      tags: ["어깨", "앉은 자세"]
    },
  
    { 
      id: 5,
      title: "유산소 운동 코스",
      description: "심장 건강과 체력 향상을 위한 유산소 운동을 합니다.",
      time: "총 30분",
      image: CourseImagePlaceholder,
      tags: ["어깨", "선 자세"]
    },

    { 
      id: 6,
      title: "근력 운동 코스",
      description: "체중을 이용한 근력 운동을 중점적으로 합니다.",
      time: "총 15분",
      image: CourseImagePlaceholder,
      tags: ["허벅지", "선 자세", "앉은 자세"]
    },
  
    { 
      id: 7,
      title: "밸런스 트레이닝",
      description: "몸의 균형 능력을 향상시키기 위한 운동 코스입니다.",
      time: "총 20분",
      image: CourseImagePlaceholder,
      tags: ["어깨", "앉은 자세"]
    },
  
    { 
      id: 8,
      title: "포스쳐 교정 코스",
      description: "올바른 자세를 유지하기 위한 교정 운동을 포함하고 있습니다.",
      time: "총 15분",
      image: CourseImagePlaceholder,
      tags: ["목", "선 자세"]
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export async function getAllCourses() {
    return JSON.parse(JSON.stringify(courseList));
}

export async function getCoursesByCategory(category) {
    return JSON.parse(
        JSON.stringify(courseList.filter(course => course.tags.includes(category)))
    );
}

export async function getCoursesByPosture(posture) {
    return JSON.parse(
        JSON.stringify(courseList.filter(course => course.tags.includes(posture)))
    );
}

export async function getCourse(id) {
    return JSON.parse(
        JSON.stringify(courseList.find(course => course.id === Number(id)) || null)
    );
}