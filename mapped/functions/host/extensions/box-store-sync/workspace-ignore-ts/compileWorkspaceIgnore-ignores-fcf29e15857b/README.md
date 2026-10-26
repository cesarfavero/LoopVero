# `compileWorkspaceIgnore/ignores`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/workspace-ignore.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/workspace-ignore-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482266-482272](../../../../../../../reference/runtime/host-main.cjs#L482266-L482272) | `FunctionExpression` | não | `relPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482266-482272](../../../../../../../reference/runtime/host-main.cjs#L482266-L482272) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:482266

Chamadas escritas diretamente neste corpo: `rule.fileRe.test`.

Alvos de atribuição ou incremento: `ignored`.

SHA-256 do trecho: `8191aba8cd8a86bb65bde009feeffb2d80cf56a51a7e9337edc16e1fca0d27ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
