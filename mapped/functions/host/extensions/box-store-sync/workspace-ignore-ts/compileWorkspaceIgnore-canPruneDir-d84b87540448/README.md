# `compileWorkspaceIgnore/canPruneDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/workspace-ignore.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/workspace-ignore-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482273-482279](../../../../../../../reference/runtime/host-main.cjs#L482273-L482279) | `FunctionExpression` | não | `relDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482273-482279](../../../../../../../reference/runtime/host-main.cjs#L482273-L482279) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:482273

Chamadas escritas diretamente neste corpo: `negationReaches`, `positiveDirRes.some`.

SHA-256 do trecho: `f9d157b0dbd21b2e9b1a281efdb2e403dda8577cfa2e3320f118df25b95f89ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
