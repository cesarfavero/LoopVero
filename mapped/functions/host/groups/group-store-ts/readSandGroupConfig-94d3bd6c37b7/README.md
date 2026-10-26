# `readSandGroupConfig`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `host/groups/group-store.ts` · [README do módulo](../../../../../modules/host/groups/group-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491453-491474](../../../../../../reference/runtime/host-main.cjs#L491453-L491474) | `FunctionDeclaration` | não | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491453-491474](../../../../../../reference/runtime/host-main.cjs#L491453-L491474) | 3 | 0 | 0 | 5 | 0 | 2 |

### host:491453

Chamadas escritas diretamente neste corpo: `JSON.parse`, `getSandGroupPath`, `normalizeMemberIds`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`.

Alvos de atribuição ou incremento: `parsed2`, `raw`.

SHA-256 do trecho: `9f23967c4d9c33af95bd2cb97d76e61c55056955c30495449440bcaa16e39a13`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
