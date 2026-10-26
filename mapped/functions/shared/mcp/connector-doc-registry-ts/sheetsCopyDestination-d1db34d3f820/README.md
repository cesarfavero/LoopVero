# `sheetsCopyDestination`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774132-774136](../../../../../../reference/runtime/host-main.cjs#L774132-L774136) | `FunctionDeclaration` | não | `args` |
| [evaluation:573347-573351](../../../../../../reference/runtime/sand-eval-runner.cjs#L573347-L573351) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774132-774136](../../../../../../reference/runtime/host-main.cjs#L774132-L774136) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573347-573351](../../../../../../reference/runtime/sand-eval-runner.cjs#L573347-L573351) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:774132

Chamadas escritas diretamente neste corpo: `googleDoc`, `stringArg2`.

SHA-256 do trecho: `424fe4f8288c675a671f3535d796adb229558361217385754bffe3c13f0135e8`.

### evaluation:573347

Chamadas escritas diretamente neste corpo: `googleDoc`, `stringArg2`.

SHA-256 do trecho: `da3cae4f9272e6ddb1840e32a0ced294147fa9f101f4f5d09ec00257fed15a5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
