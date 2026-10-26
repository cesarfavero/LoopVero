# `unlinkPlantedLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:483720-483726](../../../../../../../reference/runtime/host-main.cjs#L483720-L483726) | `FunctionDeclaration` | sim | `entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483720-483726](../../../../../../../reference/runtime/host-main.cjs#L483720-L483726) | 1 | 0 | 2 | 0 | 0 | 0 |

### host:483720

Chamadas escritas diretamente neste corpo: `.catch`, `info2.isSymbolicLink`.

SHA-256 do trecho: `087816ca89975ec8aa62b816629c3aa3e9f307a633f14c162974ca9dec2d9374`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
