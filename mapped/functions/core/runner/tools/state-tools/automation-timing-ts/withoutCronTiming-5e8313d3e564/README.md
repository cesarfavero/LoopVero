# `withoutCronTiming`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/tools/state-tools/automation-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/automation-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761961-761963](../../../../../../../../reference/runtime/host-main.cjs#L761961-L761963) | `FunctionDeclaration` | não | `trigger2` |
| [evaluation:554539-554541](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554539-L554541) | `FunctionDeclaration` | não | `trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761961-761963](../../../../../../../../reference/runtime/host-main.cjs#L761961-L761963) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554539-554541](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554539-L554541) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761961

Chamadas escritas diretamente neste corpo: `withCronMembers`.

SHA-256 do trecho: `ed017ffc9b6a6ea245e5a98e1961e3fed1a7949ca288ee2d5cc9f220e5eaeee0`.

### evaluation:554539

Chamadas escritas diretamente neste corpo: `withCronMembers`.

SHA-256 do trecho: `2751a62575c7ae9f6e136ab2f0d61ac783a13cbfd2283422f41b421f39b40e56`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
