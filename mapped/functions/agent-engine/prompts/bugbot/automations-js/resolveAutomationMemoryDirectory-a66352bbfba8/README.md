# `resolveAutomationMemoryDirectory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `agent-engine/prompts/bugbot/automations.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/bugbot/automations-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:631424-631431](../../../../../../../reference/runtime/host-main.cjs#L631424-L631431) | `FunctionDeclaration` | não | `stores` |
| [evaluation:410609-410616](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410609-L410616) | `FunctionDeclaration` | não | `stores` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:631424-631431](../../../../../../../reference/runtime/host-main.cjs#L631424-L631431) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:410609-410616](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410609-L410616) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:631424

Chamadas escritas diretamente neste corpo: `.join`, `automationStore.path.trim`, `getMountedPathModule`, `stores.find`.

SHA-256 do trecho: `daf14b08a040e742fe7989a63deb8f37e5d2cb258b9f66f5ec6026fb88e9fe8a`.

### evaluation:410609

Chamadas escritas diretamente neste corpo: `.join`, `automationStore.path.trim`, `getMountedPathModule`, `stores.find`.

SHA-256 do trecho: `daf14b08a040e742fe7989a63deb8f37e5d2cb258b9f66f5ec6026fb88e9fe8a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
