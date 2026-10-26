# `cloneAutomations`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-clone.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-clone-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716936-716945](../../../../../../../reference/runtime/host-main.cjs#L716936-L716945) | `FunctionDeclaration` | não | `sourceDir, targetDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716936-716945](../../../../../../../reference/runtime/host-main.cjs#L716936-L716945) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:716936

Chamadas escritas diretamente neste corpo: `copySandDataFileSync`, `ensureSandDataDirSync`, `getAgentAutomationsDir`, `listAgentAutomationConfigFiles`.

SHA-256 do trecho: `32d9e258cd2f3add6d32ceafe29caa4dfaf5a6c6341e6eebc84729565bba5d8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
