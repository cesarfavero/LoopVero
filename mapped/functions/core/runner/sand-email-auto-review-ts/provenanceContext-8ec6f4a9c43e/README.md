# `provenanceContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-email-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-email-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764556-764566](../../../../../../reference/runtime/host-main.cjs#L764556-L764566) | `FunctionDeclaration` | não | `target, provenance` |
| [evaluation:557924-557934](../../../../../../reference/runtime/sand-eval-runner.cjs#L557924-L557934) | `FunctionDeclaration` | não | `target, provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764556-764566](../../../../../../reference/runtime/host-main.cjs#L764556-L764566) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557924-557934](../../../../../../reference/runtime/sand-eval-runner.cjs#L557924-L557934) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:764556

Chamadas escritas diretamente neste corpo: `wakeEmailContext`.

SHA-256 do trecho: `b8136053aac9db6a37b153fe422e63d805e872f91184f5ed0d32fac04b9e1fce`.

### evaluation:557924

Chamadas escritas diretamente neste corpo: `wakeEmailContext`.

SHA-256 do trecho: `b8136053aac9db6a37b153fe422e63d805e872f91184f5ed0d32fac04b9e1fce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
