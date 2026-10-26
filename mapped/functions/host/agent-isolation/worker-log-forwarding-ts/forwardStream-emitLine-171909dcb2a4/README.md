# `forwardStream/emitLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/worker-log-forwarding.ts` · [README do módulo](../../../../../modules/host/agent-isolation/worker-log-forwarding-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715095-715100](../../../../../../reference/runtime/host-main.cjs#L715095-L715100) | `ArrowFunctionExpression` | não | `line` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715095-715100](../../../../../../reference/runtime/host-main.cjs#L715095-L715100) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:715095

Chamadas escritas diretamente neste corpo: `emit`, `line.slice`.

SHA-256 do trecho: `1268ad25fc70375762fe6035da51d4c1bb82d1ad27033c9d7a9115aa788b80a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
