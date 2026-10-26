# `loadMachineId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-secret-store.ts` · [README do módulo](../../../../modules/host/host-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454086-454101](../../../../../reference/runtime/host-main.cjs#L454086-L454101) | `FunctionDeclaration` | sim | `path33, noFollowRoot, onRefused, io2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454086-454101](../../../../../reference/runtime/host-main.cjs#L454086-L454101) | 3 | 0 | 3 | 2 | 1 | 1 |

### host:454086

Chamadas escritas diretamente neste corpo: `crypto.randomUUID`, `onRefused`, `readMachineId`, `reportFallback`, `unlinkFinalLink`, `writeMachineId`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `e443e89d9d6555f1e033037424ad953bdf90581cc65cfa8faaf3165569ec3df8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
