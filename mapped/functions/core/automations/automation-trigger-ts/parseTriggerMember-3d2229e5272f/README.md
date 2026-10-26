# `parseTriggerMember`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716302-716335](../../../../../../reference/runtime/host-main.cjs#L716302-L716335) | `FunctionDeclaration` | não | `value` |
| [evaluation:527985-528018](../../../../../../reference/runtime/sand-eval-runner.cjs#L527985-L528018) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716302-716335](../../../../../../reference/runtime/host-main.cjs#L716302-L716335) | 13 | 0 | 0 | 12 | 0 | 0 |
| [evaluation:527985-528018](../../../../../../reference/runtime/sand-eval-runner.cjs#L527985-L528018) | 13 | 0 | 0 | 12 | 0 | 0 |

### host:716302

Chamadas escritas diretamente neste corpo: `cronTrigger`, `isUnknownRecord2`, `normalizeScopeToken`, `parseCronTiming`, `parseEmailTrigger`, `parseGithubListener`, `parseLinearTrigger`, `parseMicrosoftTeamsTrigger`, `parseOriginListener`, `parsePagerDutyTrigger`, `parseSentryTrigger`, `parseSlackListener`, `triggerParseFailure`.

SHA-256 do trecho: `8c666b64e776344f75a266731c30631287b8fdc388c87de75e5198ba3ec9b3ec`.

### evaluation:527985

Chamadas escritas diretamente neste corpo: `cronTrigger`, `isUnknownRecord2`, `normalizeScopeToken`, `parseCronTiming`, `parseEmailTrigger`, `parseGithubListener`, `parseLinearTrigger`, `parseMicrosoftTeamsTrigger`, `parseOriginListener`, `parsePagerDutyTrigger`, `parseSentryTrigger`, `parseSlackListener`, `triggerParseFailure`.

SHA-256 do trecho: `8c666b64e776344f75a266731c30631287b8fdc388c87de75e5198ba3ec9b3ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
