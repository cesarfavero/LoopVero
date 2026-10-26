# `readSidecarNoFollowSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sqlite-snapshot.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sqlite-snapshot-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480376-480383](../../../../../../../reference/runtime/host-main.cjs#L480376-L480383) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480376-480383](../../../../../../../reference/runtime/host-main.cjs#L480376-L480383) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:480376

Chamadas escritas diretamente neste corpo: `isMissingPathError`, `readFileNoFollowSync2`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `c8ff15ba7d7a890a63d40d004c6689c46cb07147d0462de0ed070a3b322ad6ad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
