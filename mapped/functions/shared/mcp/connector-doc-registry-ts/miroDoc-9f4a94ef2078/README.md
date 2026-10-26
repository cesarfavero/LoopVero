# `miroDoc`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774186-774189](../../../../../../reference/runtime/host-main.cjs#L774186-L774189) | `FunctionDeclaration` | não | `raw` |
| [evaluation:573401-573404](../../../../../../reference/runtime/sand-eval-runner.cjs#L573401-L573404) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774186-774189](../../../../../../reference/runtime/host-main.cjs#L774186-L774189) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573401-573404](../../../../../../reference/runtime/sand-eval-runner.cjs#L573401-L573404) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774186

Chamadas escritas diretamente neste corpo: `matching`, `raw.trim`.

SHA-256 do trecho: `a1207a0674c0439d836d532e7bb91a86de7ed3cd9d2d84ee9195bf28eaacbb11`.

### evaluation:573401

Chamadas escritas diretamente neste corpo: `matching`, `raw.trim`.

SHA-256 do trecho: `a1207a0674c0439d836d532e7bb91a86de7ed3cd9d2d84ee9195bf28eaacbb11`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
