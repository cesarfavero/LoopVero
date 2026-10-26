# `cronMembers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/tools/state-tools/automation-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/automation-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761951-761953](../../../../../../../../reference/runtime/host-main.cjs#L761951-L761953) | `FunctionDeclaration` | não | `trigger2` |
| [evaluation:554529-554531](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554529-L554531) | `FunctionDeclaration` | não | `trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761951-761953](../../../../../../../../reference/runtime/host-main.cjs#L761951-L761953) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554529-554531](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554529-L554531) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:761951

Chamadas escritas diretamente neste corpo: `.filter`, `triggerList`.

SHA-256 do trecho: `1f3a7a823032bce4fda309bd127bec484958e91c2622b9579a0cbd6c5b8f689a`.

### evaluation:554529

Chamadas escritas diretamente neste corpo: `.filter`, `triggerList`.

SHA-256 do trecho: `4ff06db648df9353152063d49b175fc7a270ec8164f275b61bb102f6f052bd09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
