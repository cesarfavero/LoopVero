# `sentMessageSignature`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755820-755832](../../../../../../../../reference/runtime/host-main.cjs#L755820-L755832) | `FunctionDeclaration` | sim | `execute, route, sendingAddress` |
| [evaluation:541695-541707](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541695-L541707) | `FunctionDeclaration` | sim | `execute, route, sendingAddress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755820-755832](../../../../../../../../reference/runtime/host-main.cjs#L755820-L755832) | 6 | 0 | 2 | 4 | 0 | 0 |
| [evaluation:541695-541707](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541695-L541707) | 6 | 0 | 2 | 4 | 0 | 0 |

### host:755820

Chamadas escritas diretamente neste corpo: `execute`, `namesSigner`, `reads.firstId`, `reads.read`, `reads.sentMessage`, `signatureBlock`, `signatureReads`, `signerNameParts`.

SHA-256 do trecho: `eff769c9662ea134c87de7fa5977549acc9ec14f8948470406b9b614ed7252e5`.

### evaluation:541695

Chamadas escritas diretamente neste corpo: `execute`, `namesSigner`, `reads.firstId`, `reads.read`, `reads.sentMessage`, `signatureBlock`, `signatureReads`, `signerNameParts`.

SHA-256 do trecho: `eff769c9662ea134c87de7fa5977549acc9ec14f8948470406b9b614ed7252e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
