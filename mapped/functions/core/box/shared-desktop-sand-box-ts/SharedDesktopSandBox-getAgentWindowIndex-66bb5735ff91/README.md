# `SharedDesktopSandBox.getAgentWindowIndex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:555149-555152](../../../../../../reference/runtime/host-main.cjs#L555149-L555152) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555149-555152](../../../../../../reference/runtime/host-main.cjs#L555149-L555152) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:555149

Chamadas escritas diretamente neste corpo: `this.agentWindows.get`, `this.downForks.has`.

SHA-256 do trecho: `40176abb76f5aff2da48715daf7b9b2a0d5992ff503e2c29acad55eb5d384159`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
