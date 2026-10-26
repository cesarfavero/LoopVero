# `mirrorDraftingDisabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495136-495141](../../../../../../../reference/runtime/host-main.cjs#L495136-L495141) | `FunctionDeclaration` | não | `agentDir, agent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495136-495141](../../../../../../../reference/runtime/host-main.cjs#L495136-L495141) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:495136

Chamadas escritas diretamente neste corpo: `getSandSettingsPath`, `readSandSettingsFile`, `writeSandSettingsFile`.

SHA-256 do trecho: `054a742c07a76c5398254331621fd748c8d8dbafb5b76f976f64bc086c89b0d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
