# `startDiskPressureWatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/disk-pressure.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/disk-pressure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679960-680006](../../../../../../../reference/runtime/host-main.cjs#L679960-L680006) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679960-680006](../../../../../../../reference/runtime/host-main.cjs#L679960-L680006) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:679960

Chamadas escritas diretamente neste corpo: `createDiskPressureGuard`, `createDiskPressureReminderEpisodes`, `deps.polling.start`, `getSandRootDir`, `new Set`.

Alvos de atribuição ou incremento: `guard`, `polling`.

SHA-256 do trecho: `c7711423708f7fb4858c82c28088d29b66a3043321a1cbf0d2ef6aa413e421dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
