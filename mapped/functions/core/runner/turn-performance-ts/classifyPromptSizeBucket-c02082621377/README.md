# `classifyPromptSizeBucket`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546968-546976](../../../../../../reference/runtime/sand-eval-runner.cjs#L546968-L546976) | `FunctionDeclaration` | não | `inputTokens` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546968-546976](../../../../../../reference/runtime/sand-eval-runner.cjs#L546968-L546976) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:546968

Chamadas escritas diretamente neste corpo: `Number.isFinite`.

SHA-256 do trecho: `dd204294017f3f1e650ba04ae90496ac092e99e536c51a38bb5140dd22f135aa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
