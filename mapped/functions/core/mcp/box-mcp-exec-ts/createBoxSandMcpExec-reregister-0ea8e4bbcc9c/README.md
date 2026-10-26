# `createBoxSandMcpExec/reregister`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684904-684918](../../../../../../reference/runtime/host-main.cjs#L684904-L684918) | `ArrowFunctionExpression` | sim | `host, serverIdentifier` |
| [evaluation:514692-514706](../../../../../../reference/runtime/sand-eval-runner.cjs#L514692-L514706) | `ArrowFunctionExpression` | sim | `host, serverIdentifier` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684904-684918](../../../../../../reference/runtime/host-main.cjs#L684904-L684918) | 4 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:514692-514706](../../../../../../reference/runtime/sand-eval-runner.cjs#L514692-L514706) | 4 | 0 | 3 | 4 | 0 | 0 |

### host:684904

Chamadas escritas diretamente neste corpo: `configThatRestartsServer`, `configWithoutServer`, `loadOn`, `loadOptions`.

SHA-256 do trecho: `851f59463e8b09ffc576b8e150fff89cce28d37aea9c597eb4adb2ad237128f6`.

### evaluation:514692

Chamadas escritas diretamente neste corpo: `configThatRestartsServer`, `configWithoutServer`, `loadOn`, `loadOptions`.

SHA-256 do trecho: `851f59463e8b09ffc576b8e150fff89cce28d37aea9c597eb4adb2ad237128f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
