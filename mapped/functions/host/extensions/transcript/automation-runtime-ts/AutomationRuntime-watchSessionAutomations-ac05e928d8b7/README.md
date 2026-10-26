# `AutomationRuntime.watchSessionAutomations`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733990-734004](../../../../../../../reference/runtime/host-main.cjs#L733990-L734004) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733990-734004](../../../../../../../reference/runtime/host-main.cjs#L733990-L734004) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:733990

Chamadas escritas diretamente neste corpo: `session.automations.setOnChange`, `this.seedKnownAutomations`, `this.watchedAutomations.setOnChange`.

Alvos de atribuição ou incremento: `this.watchedAutomations`.

SHA-256 do trecho: `c3766d743e72781420e6c0d2a7207372953876621114db770542eb6f3a52da39`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
