<?php


if (!function_exists('userForApi')) {

    /**
     * return user array convertible for api
     *
     * @param bool $json
     * @return array|string
     */
    function userForApi($json = false)
    {
        /** @var \App\Models\User $user */
        $user = auth()->user();

        $userArray = [
            'id'             => $user->id ?? null,
            'role'             => $user->role ?? null,
            'name'           => $user->name ?? null,
            'family'         => $user->family ?? null,
            'full_name'      => $user->full_name ?? null,
            'display_name'   => $user->display_name ?? null,
            'email'          => $user->email ?? null,
            'student_number' => $user->student_number ?? null,
        ];

        if($json)
            return addslashes(json_encode($userArray));

        return $userArray;
    }
}
