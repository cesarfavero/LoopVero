# `applySandInferenceRequestContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225025-225040](../../../../../../../reference/runtime/host-main.cjs#L225025-L225040) | `FunctionDeclaration` | não | `headers, context2` |
| [evaluation:512088-512103](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512088-L512103) | `FunctionDeclaration` | não | `headers, context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225025-225040](../../../../../../../reference/runtime/host-main.cjs#L225025-L225040) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512088-512103](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512088-L512103) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:225025

Chamadas escritas diretamente neste corpo: `context2.inferenceProxyJwt.trim`, `headers.set`, `inferenceProxyJwt.startsWith`.

SHA-256 do trecho: `f968eab94dcd7a55db911a99f9bea557ff4966f97e9d1a5d73d1fc5519e49e4a`.

### evaluation:512088

Chamadas escritas diretamente neste corpo: `context2.inferenceProxyJwt.trim`, `headers.set`, `inferenceProxyJwt.startsWith`.

SHA-256 do trecho: `f968eab94dcd7a55db911a99f9bea557ff4966f97e9d1a5d73d1fc5519e49e4a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
