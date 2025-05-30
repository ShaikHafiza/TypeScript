import sys

def main():
    n = int(sys.stdin.readline())
    arr = list(map(int, sys.stdin.readline().split()))

    arr.sort()
    occ = [False] * (10**5 + 2)
    res = 0

    for x in arr:
        if x - 1 >= 1 and not occ[x - 1]:
            occ[x - 1] = True
            res += 1
            continue
        if not occ[x]:
            occ[x] = True
            res += 1
            continue
        if not occ[x + 1]:
            occ[x + 1] = True
            res += 1

    print(res)

if __name__ == '__main__':
    main()
