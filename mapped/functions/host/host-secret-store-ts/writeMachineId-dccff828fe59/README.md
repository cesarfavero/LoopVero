# `writeMachineId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-secret-store.ts` · [README do módulo](../../../../modules/host/host-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454132-454137](../../../../../reference/runtime/host-main.cjs#L454132-L454137) | `FunctionDeclaration` | sim | `path33, noFollowRoot, machineId, io2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454132-454137](../../../../../reference/runtime/host-main.cjs#L454132-L454137) | 0 | 0 | 3 | 0 | 0 | 0 |

### host:454132

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `io2.open`, `io2.write`, `landed.close`.

SHA-256 do trecho: `72bb10c80ab927cf528492a410babe88f1de5ae723707cfa98974489f6e47b5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
