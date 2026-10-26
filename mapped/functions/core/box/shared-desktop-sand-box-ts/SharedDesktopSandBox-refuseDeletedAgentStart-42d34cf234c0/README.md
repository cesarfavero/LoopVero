# `SharedDesktopSandBox.refuseDeletedAgentStart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554812-554819](../../../../../../reference/runtime/host-main.cjs#L554812-L554819) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554812-554819](../../../../../../reference/runtime/host-main.cjs#L554812-L554819) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:554812

Chamadas escritas diretamente neste corpo: `deleted.has`, `new SandBoxAgentDeletedError`, `this.deletedAgents.add`, `this.deletedAgents.has`, `this.findDeletedAgents`.

Alvos de lançamento explícito: `SandBoxAgentDeletedError`.

SHA-256 do trecho: `323e076f8b70367afd4a2cca0c273658a372234aa79004b86194cbeb4d90fedd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
