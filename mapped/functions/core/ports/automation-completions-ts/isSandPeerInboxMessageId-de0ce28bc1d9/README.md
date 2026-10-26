# `isSandPeerInboxMessageId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/ports/automation-completions.ts` · [README do módulo](../../../../../modules/core/ports/automation-completions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716990-716992](../../../../../../reference/runtime/host-main.cjs#L716990-L716992) | `FunctionDeclaration` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716990-716992](../../../../../../reference/runtime/host-main.cjs#L716990-L716992) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716990

Chamadas escritas diretamente neste corpo: `id.startsWith`.

SHA-256 do trecho: `80ff228a8c10f3757e4d39a04194fd0a43f8bf690cecc939e603ee8857348c88`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
