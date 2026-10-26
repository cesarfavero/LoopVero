# `createCredentialTools/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751900-751917](../../../../../../../reference/runtime/host-main.cjs#L751900-L751917) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |
| [evaluation:524966-524983](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524966-L524983) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751900-751917](../../../../../../../reference/runtime/host-main.cjs#L751900-L751917) | 8 | 0 | 3 | 5 | 0 | 0 |
| [evaluation:524966-524983](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524966-L524983) | 8 | 0 | 3 | 5 | 0 | 0 |

### host:751900

Chamadas escritas diretamente neste corpo: `checkSavedLogins`, `deps.countSecureValueSavedLogins`, `deps.hasSecureValueSavedLogins`, `listCredentialsForSite`, `mentionableListing`, `noteToolTargetHost`, `sandCredentialTurnRefusalPhrase`.

SHA-256 do trecho: `581842074a300f7d593ba8f81027aaf0d85904293fe68270a65b586b24bb85e6`.

### evaluation:524966

Chamadas escritas diretamente neste corpo: `checkSavedLogins`, `deps.countSecureValueSavedLogins`, `deps.hasSecureValueSavedLogins`, `listCredentialsForSite`, `mentionableListing`, `noteToolTargetHost`, `sandCredentialTurnRefusalPhrase`.

SHA-256 do trecho: `581842074a300f7d593ba8f81027aaf0d85904293fe68270a65b586b24bb85e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
