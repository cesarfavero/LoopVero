# `safeJsonParse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/tool-calls.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:539170-539176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539170-L539176) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539170-539176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539170-L539176) | 0 | 0 | 0 | 2 | 0 | 1 |

### evaluation:539170

Chamadas escritas diretamente neste corpo: `JSON.parse`.

SHA-256 do trecho: `d8d67fe926f8d15d80cc286ea9439250b9daef4496e1c90b4cf779db841449c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
