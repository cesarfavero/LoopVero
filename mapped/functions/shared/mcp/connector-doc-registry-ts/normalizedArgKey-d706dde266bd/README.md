# `normalizedArgKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774504-774506](../../../../../../reference/runtime/host-main.cjs#L774504-L774506) | `FunctionDeclaration` | não | `key` |
| [evaluation:573740-573742](../../../../../../reference/runtime/sand-eval-runner.cjs#L573740-L573742) | `FunctionDeclaration` | não | `key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774504-774506](../../../../../../reference/runtime/host-main.cjs#L774504-L774506) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573740-573742](../../../../../../reference/runtime/sand-eval-runner.cjs#L573740-L573742) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774504

Chamadas escritas diretamente neste corpo: `.replaceAll`, `key.toLowerCase`.

SHA-256 do trecho: `8f5f5860b7d74955f8d3213b85b0aa46f6e454407a697a5dd25574b9b8968469`.

### evaluation:573740

Chamadas escritas diretamente neste corpo: `.replaceAll`, `key.toLowerCase`.

SHA-256 do trecho: `8f5f5860b7d74955f8d3213b85b0aa46f6e454407a697a5dd25574b9b8968469`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
