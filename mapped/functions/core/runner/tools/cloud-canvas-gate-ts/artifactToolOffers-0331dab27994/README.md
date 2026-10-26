# `artifactToolOffers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/cloud-canvas-gate.ts` · [README do módulo](../../../../../../modules/core/runner/tools/cloud-canvas-gate-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754521-754526](../../../../../../../reference/runtime/host-main.cjs#L754521-L754526) | `FunctionDeclaration` | não | `host, decisions` |
| [evaluation:537224-537229](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537224-L537229) | `FunctionDeclaration` | não | `host, decisions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754521-754526](../../../../../../../reference/runtime/host-main.cjs#L754521-L754526) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537224-537229](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537224-L537229) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754521

Chamadas escritas diretamente neste corpo: `decisions.offers`, `host.gates.cloudCanvasTools`.

SHA-256 do trecho: `627bccd6bd42b7ea884ea877fad4fc4b945dedf7d841a3111209673d624d1b4b`.

### evaluation:537224

Chamadas escritas diretamente neste corpo: `decisions.offers`, `host.gates.cloudCanvasTools`.

SHA-256 do trecho: `627bccd6bd42b7ea884ea877fad4fc4b945dedf7d841a3111209673d624d1b4b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
