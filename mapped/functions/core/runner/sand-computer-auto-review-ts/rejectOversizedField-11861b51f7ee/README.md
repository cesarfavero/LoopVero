# `rejectOversizedField`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699316-699321](../../../../../../reference/runtime/host-main.cjs#L699316-L699321) | `FunctionDeclaration` | não | `field, maxChars` |
| [evaluation:513072-513077](../../../../../../reference/runtime/sand-eval-runner.cjs#L513072-L513077) | `FunctionDeclaration` | não | `field, maxChars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699316-699321](../../../../../../reference/runtime/host-main.cjs#L699316-L699321) | 0 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:513072-513077](../../../../../../reference/runtime/sand-eval-runner.cjs#L513072-L513077) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:699316

Chamadas escritas diretamente neste corpo: `new SandComputerAutoReviewBlockedError`.

Alvos de lançamento explícito: `SandComputerAutoReviewBlockedError`.

SHA-256 do trecho: `dc0baea9a8ae0d47392abef0a8f46e0ce244a8d4dd898cb590b87e3cc15785bc`.

### evaluation:513072

Chamadas escritas diretamente neste corpo: `new SandComputerAutoReviewBlockedError`.

Alvos de lançamento explícito: `SandComputerAutoReviewBlockedError`.

SHA-256 do trecho: `dc0baea9a8ae0d47392abef0a8f46e0ce244a8d4dd898cb590b87e3cc15785bc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
