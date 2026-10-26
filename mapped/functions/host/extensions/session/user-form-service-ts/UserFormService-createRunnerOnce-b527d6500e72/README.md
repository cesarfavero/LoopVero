# `UserFormService.createRunnerOnce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/user-form-service.ts` · [README do módulo](../../../../../../modules/host/extensions/session/user-form-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728147-728168](../../../../../../../reference/runtime/host-main.cjs#L728147-L728168) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728147-728168](../../../../../../../reference/runtime/host-main.cjs#L728147-L728168) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:728147

Chamadas escritas diretamente neste corpo: `boxAgentWindowIndex`, `createSandBrowserOpRunner`, `reportFallback`, `this.deps.box.ensureReady`.

Alvos de atribuição ou incremento: `connection`.

SHA-256 do trecho: `d5d9901b07c1c3bf0f6a20782f6df5dff05d9c8123516d1948df1d731611f3ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
