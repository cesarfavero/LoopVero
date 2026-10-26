# `openDirectoryRefusingLinks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454010-454021](../../../../../reference/runtime/host-main.cjs#L454010-L454021) | `FunctionDeclaration` | não | `entry, shown, options2 = {}` |
| [evaluation:627610-627621](../../../../../reference/runtime/sand-eval-runner.cjs#L627610-L627621) | `FunctionDeclaration` | não | `entry, shown, options2 = {}` |
| [state-worker:611-622](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L611-L622) | `FunctionDeclaration` | não | `entry, shown, options = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454010-454021](../../../../../reference/runtime/host-main.cjs#L454010-L454021) | 2 | 0 | 0 | 1 | 1 | 1 |
| [evaluation:627610-627621](../../../../../reference/runtime/sand-eval-runner.cjs#L627610-L627621) | 2 | 0 | 0 | 1 | 1 | 1 |
| [state-worker:611-622](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L611-L622) | 2 | 0 | 0 | 1 | 1 | 1 |

### host:454010

Chamadas escritas diretamente neste corpo: `.isSymbolicLink`, `findSystemErrno`, `new NoFollowRefusedError`.

Alvos de lançamento explícito: `ConditionalExpression`.

SHA-256 do trecho: `a5b67f05978e1e080f5397ae759ba9b3b19d65b9ea7aeb3b49409766980dd6ce`.

### evaluation:627610

Chamadas escritas diretamente neste corpo: `.isSymbolicLink`, `findSystemErrno`, `new NoFollowRefusedError`.

Alvos de lançamento explícito: `ConditionalExpression`.

SHA-256 do trecho: `17082097b5a40429c94d05fe67e2eabf63757d58e938c31e1460f525478ac1f1`.

### state-worker:611

Chamadas escritas diretamente neste corpo: `.isSymbolicLink`, `findSystemErrno`, `new NoFollowRefusedError`.

Alvos de lançamento explícito: `ConditionalExpression`.

SHA-256 do trecho: `2564e555b863ccaf4627aea7cfae7a80216d55e88aa9867bcd7e57d40af4936c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
