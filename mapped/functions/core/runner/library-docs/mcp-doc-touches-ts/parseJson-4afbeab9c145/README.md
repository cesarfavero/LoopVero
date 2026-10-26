# `parseJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/library-docs/mcp-doc-touches.ts` · [README do módulo](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:574010-574018](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574010-L574018) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:574010-574018](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574010-L574018) | 1 | 0 | 0 | 3 | 0 | 1 |

### evaluation:574010

Chamadas escritas diretamente neste corpo: `.toJson`, `Value.fromJsonString`, `text3.trim`, `trimmed.startsWith`.

SHA-256 do trecho: `b7b0fcf5d489ae44af1470d9cda874f2c79ddc43edb9ba33fe636926884d1396`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
