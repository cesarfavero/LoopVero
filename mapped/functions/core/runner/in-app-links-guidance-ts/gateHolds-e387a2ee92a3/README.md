# `gateHolds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557652-557654](../../../../../../reference/runtime/host-main.cjs#L557652-L557654) | `FunctionDeclaration` | não | `facts, gate` |
| [evaluation:546099-546101](../../../../../../reference/runtime/sand-eval-runner.cjs#L546099-L546101) | `FunctionDeclaration` | não | `facts, gate` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557652-557654](../../../../../../reference/runtime/host-main.cjs#L557652-L557654) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546099-546101](../../../../../../reference/runtime/sand-eval-runner.cjs#L546099-L546101) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557652

Chamadas escritas diretamente neste corpo: `gateRead`.

SHA-256 do trecho: `a8e582a0b9e41a77af216b43acd8e64ae822677733e3cb6f97bcab701b0d9b7c`.

### evaluation:546099

Chamadas escritas diretamente neste corpo: `gateRead`.

SHA-256 do trecho: `a8e582a0b9e41a77af216b43acd8e64ae822677733e3cb6f97bcab701b0d9b7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
