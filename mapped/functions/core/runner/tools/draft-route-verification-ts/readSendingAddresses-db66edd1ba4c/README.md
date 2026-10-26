# `readSendingAddresses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735326-735336](../../../../../../../reference/runtime/host-main.cjs#L735326-L735336) | `FunctionDeclaration` | sim | `execute, route, sender, sendingAddress` |
| [evaluation:540891-540901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540891-L540901) | `FunctionDeclaration` | sim | `execute, route, sender, sendingAddress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735326-735336](../../../../../../../reference/runtime/host-main.cjs#L735326-L735336) | 3 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:540891-540901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540891-L540901) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:735326

Chamadas escritas diretamente neste corpo: `.filter`, `execute`, `sender.aliasRead.parseAliases`, `sendingAddress.toLowerCase`.

SHA-256 do trecho: `66a17c7830f7990cc6a890d09ecb3e3f886fb0958300f1401ad6a670e182469f`.

### evaluation:540891

Chamadas escritas diretamente neste corpo: `.filter`, `execute`, `sender.aliasRead.parseAliases`, `sendingAddress.toLowerCase`.

SHA-256 do trecho: `66a17c7830f7990cc6a890d09ecb3e3f886fb0958300f1401ad6a670e182469f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
