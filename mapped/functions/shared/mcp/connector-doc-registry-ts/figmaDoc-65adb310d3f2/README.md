# `figmaDoc`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774047-774050](../../../../../../reference/runtime/host-main.cjs#L774047-L774050) | `FunctionDeclaration` | não | `raw` |
| [evaluation:573262-573265](../../../../../../reference/runtime/sand-eval-runner.cjs#L573262-L573265) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774047-774050](../../../../../../reference/runtime/host-main.cjs#L774047-L774050) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573262-573265](../../../../../../reference/runtime/sand-eval-runner.cjs#L573262-L573265) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774047

Chamadas escritas diretamente neste corpo: `matching`, `raw.trim`.

SHA-256 do trecho: `c5df632ca153501974205aef12bf3a0800ee6835b5f5919af472d5d444551a66`.

### evaluation:573262

Chamadas escritas diretamente neste corpo: `matching`, `raw.trim`.

SHA-256 do trecho: `c5df632ca153501974205aef12bf3a0800ee6835b5f5919af472d5d444551a66`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
