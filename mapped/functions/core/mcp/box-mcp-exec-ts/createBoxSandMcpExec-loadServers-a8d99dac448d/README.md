# `createBoxSandMcpExec/loadServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684920-684923](../../../../../../reference/runtime/host-main.cjs#L684920-L684923) | `FunctionExpression` | sim | `configJson` |
| [evaluation:514708-514711](../../../../../../reference/runtime/sand-eval-runner.cjs#L514708-L514711) | `FunctionExpression` | sim | `configJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684920-684923](../../../../../../reference/runtime/host-main.cjs#L684920-L684923) | 0 | 0 | 1 | 0 | 0 | 0 |
| [evaluation:514708-514711](../../../../../../reference/runtime/sand-eval-runner.cjs#L514708-L514711) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:684920

Chamadas escritas diretamente neste corpo: `boxLoadMcpServers`, `loadOptions`.

Alvos de atribuição ou incremento: `loadedConfigJson`.

SHA-256 do trecho: `7c0cf60d6966bb308c5220a01ee0eb92d4792002d05f06363f762c098df946d2`.

### evaluation:514708

Chamadas escritas diretamente neste corpo: `boxLoadMcpServers`, `loadOptions`.

Alvos de atribuição ou incremento: `loadedConfigJson`.

SHA-256 do trecho: `7c0cf60d6966bb308c5220a01ee0eb92d4792002d05f06363f762c098df946d2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
