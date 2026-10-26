# `airtableDoc`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774173-774176](../../../../../../reference/runtime/host-main.cjs#L774173-L774176) | `FunctionDeclaration` | não | `raw` |
| [evaluation:573388-573391](../../../../../../reference/runtime/sand-eval-runner.cjs#L573388-L573391) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774173-774176](../../../../../../reference/runtime/host-main.cjs#L774173-L774176) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573388-573391](../../../../../../reference/runtime/sand-eval-runner.cjs#L573388-L573391) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774173

Chamadas escritas diretamente neste corpo: `matching`, `raw.trim`.

SHA-256 do trecho: `04bbcd47a3bc0388c46a6f55b270fbbac4034a88fd069602bf9a7e8013a21065`.

### evaluation:573388

Chamadas escritas diretamente neste corpo: `matching`, `raw.trim`.

SHA-256 do trecho: `04bbcd47a3bc0388c46a6f55b270fbbac4034a88fd069602bf9a7e8013a21065`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
